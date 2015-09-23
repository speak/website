module.exports = {
  environment: 'development',
  report_errors: false,
  hosts: {
    app: 'http://docker:3003',
    bulldog: 'http://docker:9393',
  },
  storage: {
    avatars: 'speak-development-photos'
  },
  tokens: {
    slack_client_id: '3521049616.4126340936',
    sentry: 'https://a9e92fe0b3c94755a00afd7a977d4578:0e89c597c9f543628b91b491911e4703@app.getsentry.com/34938'
  }
}
