
export const t2s = (cc: string, ss: string, tt: string) => {
  let str = ''
  for (let i = 0; i < cc.length; i++) {
    const c = cc.charAt(i)
    if (c.charCodeAt(0) > 10000 && tt.indexOf(c) !== -1) str += ss.charAt(tt.indexOf(c))
    else str += c
  }
  return str
}