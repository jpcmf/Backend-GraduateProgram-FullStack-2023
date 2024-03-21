module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", process.env.SMTP_HOST),
        port: env("SMTP_PORT", process.env.SMTP_PORT),
        auth: {
          user: env("SMTP_USERNAME", process.env.SMTP_USERNAME),
          pass: env("SMTP_PASSWORD", process.env.SMTP_PASSWORD),
        },
      },
      settings: {
        defaultFrom: "no-reply@skatehub.com.br",
        defaultReplyTo: "no-reply@skatehub.com.br",
      },
    },
  },
});
