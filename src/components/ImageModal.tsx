import ImageViewer from 'react-simple-image-viewer'
import { useState, useCallback, JSX } from 'react'
import './ImageModal.css'

interface ImageModalProps {
  imageData: string[]
}

function ImageModal ({ imageData }: ImageModalProps): JSX.Element {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <div className='modal-container'>
      {imageData.map((src, index) => (
        <img
          width='300'
          className='hover closed'
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          alt=''
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={imageData}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}

export default ImageModal
