import React from "react"

type Props = {
  heading: React.ReactNode,
  children: React.ReactNode,
  backgroundColor?: string,
  textColor?: string
  buttonInfo?: {
    text: string,
    link: string,
    backgroundColor: string
  }
}
export default function InfoBox(
  { heading,
    backgroundColor = 'bg-gray-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children
  }: Props) {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>
        {children}
      </p>
      <a
        href={buttonInfo?.link}
        className={`inline-block ${buttonInfo?.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo?.text}
      </a>
    </div>
  )
}