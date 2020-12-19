import React, { useEffect,useState, useRef } from "react";
import { Row, Col, Button,Form } from "react-bootstrap";
import DataService from '../../../services/service' 
import "./full_page.css";
function FullPage(props) {
    const [newsById, setNewsById] = useState({});
    const [myNews,setMyNews]=useState(props.match.params.news_id);
    const [reportCategory, setreportCategory] = useState([]);
    const [filteredreportCategory, setFilteredreportCategory] = useState([]);
    useEffect(() => {

        const newId = JSON.stringify({newsid:myNews});
        DataService.getNewsById(newId).then(res => {
            console.log(res.data[0].title);
            setNewsById(res.data[0])
        })
        .catch(err => {
            console.log(err);
        })

        DataService.getAllReportCategory().then(res=>{
           setreportCategory(res.data[0])
           console.log(reportCategory)
        })
  
    }, [myNews])

    const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  const onChangeHandler = (event) => {
    const filtered = reportCategory.filter(
        (reportCategory) => reportCategory.rc_id === parseInt(event.target.value)
    );
    setFilteredreportCategory(filtered);
};

    

    console.log(filteredreportCategory);
    return (
        <>
            <div className="outerWrapper">
                <Row>
                    <Col className="com category" xs="auto">
                        Automobile
          </Col>
                </Row>
                <Row>
                    <Col className="com title" xs="auto">
                        <h1>{newsById.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="com extract" xs="auto">
                        {newsById.extract}
          </Col>
                </Row>
                <Row>
                    <Col className="com author-date" xs="auto">
                        <span> BY TOLU AKINSHETE </span>
                        <span>{newsById.postedon}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="com newsImage" xs="auto">
                        {/* <img src={`../images/${newsById.image}`} alt=""></img> */}
                        <img className="imgf" src="../images/kohli.jpg" alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col className="com content" xs="auto">
                       {newsById.content}
          </Col>
                </Row>
                <Row>
                    <Col className="shareAndReport">
                        <br/>
                    <div>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <Button onClick={copyToClipboard}>Share</Button> 
          {copySuccess}
        </div>
      }
      
    </div>
    <br/><br/>
    <Form.Group>
			<Form.Label>Select Report Category</Form.Label>
			<select className='form-control' onChange={onChangeHandler} required>
				<option value='' defaultChecked>
					--Select ReportCategory--
				</option>
				{reportCategory.map(({ rc_id, rc_name }) => (
					<option key={rc_id} value={rc_id}>
						{rc_name}
					</option>
				))}
			</select>
		
		</Form.Group>
                    </Col>
                </Row>
            </div>
            <form>
        <textarea className="hiddenBox" id="urlInput" ref={textAreaRef}>{window.location.href}</textarea>
      </form>
        </>
    );
}

export default FullPage;