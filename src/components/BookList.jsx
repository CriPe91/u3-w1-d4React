import { Col, Row, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import AddComment from "./AddComment";

class BookList extends Component {
  state = {
    FiltraLibri: "",
  };
  render() {
    return (
      <>
        <Row className="justify-content-center mb-3">
          <Col xs={6}>
            <FormControl
              type="text"
              placeholder="Filtra i libri"
              value={this.state.FiltraLibri}
              onChange={(e) => this.setState({ FiltraLibri: e.target.value })}
            />
          </Col>
        </Row>
        <Row md={6} lg={3} className="gy-3">
          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.FiltraLibri.toLowerCase()))
            .map((book) => (
              <Col key={book.asin}>
                <SingleBook book={book} />
                <AddComment book={book} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}
export default BookList;
