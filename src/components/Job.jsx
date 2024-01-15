import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Job = ({ data }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) => state.liked.content)

  return (
    <>
      {isLiked ? (
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
          <Button variant='success' className='d-flex align-items-center' onClick={() => {
            dispatch({
              type: "ADD_TO_LIKED",

            })
          }}>
            I LIKE IT
          </Button>
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={9}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
          <p>I LIKE IT</p>
        </Row >
      ) : (
        <Row
          className="mx-0 mt-3 p-3"
          style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
          <Button variant='danger' className='d-flex align-items-center' onClick={() => {
            dispatch({
              type: "ADD_TO_LIKED",

            })
          }}>
            I DON'T LIKE IT
          </Button>
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={9}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
        </Row >
      )}
    </>
  )
}
export default Job
