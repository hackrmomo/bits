export default interface ThemeObject {
    colors: Colors
    fill: Fill
    font: FontStyle
}
export interface Colors {
    main: Color
    secondary: Color | undefined
    background: Color | undefined
    foreground: Color | undefined
}
export type Color = String
export type Fill = 'filled' | 'wire' | 'none'
export type FontWeight = 'ultralight' | 'thin' | 'regular' | 'bold' | 'black'
export interface FontStyle {
    weight: FontWeight
    isBold: Boolean
    isUnderlined: Boolean
    isItalics: Boolean
} 