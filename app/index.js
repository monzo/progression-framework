const {
  ms,
  express,
  metrics,
  expressLogger,
  status,
  expressErrorHandler,
  compression,
} = require('@qutics/ms')
const path = require('path')

const app = ms()

app.use(metrics())
app.use(compression())
app.use(expressLogger())
app.use(express.static(path.resolve(__dirname, '../public')))
app.use(status())
app.use(expressErrorHandler())

app.start()
