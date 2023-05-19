import React, {useEffect} from "react";

const COLORS = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-green-500",
  "text-blue-500",
  "text-indigo-500",
  "text-violet-500",
] as const;

const useRainbowify = (text: string) => {
  const [rainbowText, setRainbowText] = React.useState<React.ReactNode[] | undefined>()

  useEffect(() => {
    let startIndex = 0;

    const rainbowify = (startIndex: number) => {
      let index = startIndex;
      const coloredChars = text.split('').map(char => {
        const rainbowChar = {char, color: COLORS[index]}

        index + 1 >= COLORS.length ? index = 0 : index++

        return rainbowChar
      })

      setRainbowText(coloredChars.map(({char, color}, index) => <span className={color} key={index}>{char}</span>))
    };

    const interval = setInterval(() => {
      rainbowify(startIndex)
      startIndex + 1 >= COLORS.length ? startIndex = 0 : startIndex++
    }, 50)

    return () => clearInterval(interval)
  }, [text])
  return rainbowText
}

export default useRainbowify;