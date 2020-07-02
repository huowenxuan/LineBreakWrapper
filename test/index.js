const {openFont, LineBreakWrapper} = require('../dist')

let _font

async function getFont() {
  if (!_font) {
    _font =  await openFont(__dirname + '/OPPOSans-R.otf')
  }
  return _font
}


async function run() {
  const textOptions = {
    font: await getFont(),
    characterSpacing: 1,
  }
  let wrapper = new LineBreakWrapper(textOptions)
  wrapper.setOptions(12, 300)
  let text = "离开浦口校区，回首看那条从宿舍到教学楼的林荫道。当年的小树长大了许多"
  let lines = wrapper.wrap(text, {})
  console.log(lines)
  console.log(wrapper.wordWidth(text))
}



run()
/*
字体初始化成功
计费Joe午觉哇囧诶覅将诶鸡尾
酒，计费Joe金额为，付金额及
 */
// // let lines_num = 0, lines: string[] = []
// wrapper.setOptions(20,300)
// wrapper.on('sectionStart', () => {
// })
// // 新增一行
// wrapper.on('line', (l) => {
//   console.log(l)
//   // lines_num += 1
//   // lines.push(l)
// })
// wrapper.wrap('计费Joe午觉哇囧诶覅将诶鸡尾酒，计费Joe金额为，付金额及', {})