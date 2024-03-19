import Button from "./Button"
import { useNavigate } from 'react-router-dom'

const PREVIOUS_PAGE = -1;

export default function BackButton() {
  const navigate = useNavigate()
  return (
    <Button type='back' onClick={(e) => {
      e.preventDefault()
      navigate(PREVIOUS_PAGE)
    }}>&larr; Back</Button>
  )
}