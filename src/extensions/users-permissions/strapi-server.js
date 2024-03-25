const _ = require("lodash");
const utils = require("@strapi/utils");
const { getService } = require("@strapi/plugin-users-permissions/server/utils");
const {
  validateEmailConfirmationBody
} = require("@strapi/plugin-users-permissions/server/controllers/validation/auth");

const { ValidationError } = utils.errors;
const { sanitize } = utils;
const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

module.exports = plugin => {
  plugin.controllers.auth.emailConfirmation = async (ctx, next, returnUser) => {
    const { confirmation: confirmationToken } = await validateEmailConfirmationBody(ctx.query);

    const userService = getService("user");
    const jwtService = getService("jwt");

    const [user] = await userService.fetchAll({
      filters: { confirmationToken }
    });

    if (!user) {
      throw new ValidationError("Invalid token");
    }

    await userService.edit(user.id, {
      confirmed: true,
      confirmationToken: null
    });

    if (returnUser) {
      ctx.send({
        jwt: jwtService.issue({ id: user.id }),
        user: await sanitizeUser(user, ctx)
      });
    } else {
      const settings = await strapi.store({ type: "plugin", name: "users-permissions", key: "advanced" }).get();

      ctx.redirect(settings.email_confirmation_redirection + "?email=" + user.email || "/");
    }
  };

  return plugin;
};
