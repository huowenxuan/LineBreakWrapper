const {openFont, LineBreakWrapper} = require('../dist')

let _font

async function getFont() {
  if (!_font) {
    _font = await openFont(__dirname + '/OPPOSans-B.ttf')
  }
  return _font
}


async function run() {
  const textOptions = {
    font: await getFont(),
    characterSpacing: 1,
  }
  let wrapper = new LineBreakWrapper(textOptions)
  const maxWidth = 1476
  wrapper.setOptions(100, maxWidth)
  let text = "fdsafdsafe,qfe1234567890123456789012345678901234567890"
  let lines = wrapper.wrap(text, {})
  console.log(lines, 'realLines')
}

run()
