import type { TextContentData } from '@/components/widgets/widgets-type.d.ts'

interface TextContentProps {
  data: TextContentData['propsData']
}

const TextContent = ({ data }: TextContentProps) => {
  const { content } = data

  return (
    <div
      className="tiptap flex min-h-9 flex-col justify-center"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  )
}

export { TextContent }