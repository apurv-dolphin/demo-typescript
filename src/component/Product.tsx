import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Header from "./Header";
import CustomPagination from "./Pagination";

type ProductData = {
  name: string;
  image: string;
  price: number;
  slug: string;
  category: string;
  id: number;
};

export default function Product() {
  const [data, setData] = useState<ProductData[]>([]);
  const [, setOrder] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const PER_PAGE = 10;

  // pagination method start
  const indexofLastpost = page * PER_PAGE;
  const indexofFirstpost = indexofLastpost - PER_PAGE;
  const currentPosts = data.slice(indexofFirstpost, indexofLastpost);

  //change page of pagination
  const paginate = (updatepage: number) => {
    setPage(updatepage);
  };
  // end
  // end

  const sortAscending = () => {
    setOrder("asc");
    const sortascData = data.sort(function (a, b) {
      return a.price - b.price;
    });
    setData(sortascData);
  };

  const sortDescending = () => {
    setOrder("dsc");
    const sortdscData = data.sort(function (a, b) {
      return b.price - a.price;
    });
    setData(sortdscData);
  };

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Header />

      <div className="dropdown">
        <NavDropdown
          title="sort by price"
          id="navbarScrollingDropdown"
          style={{ float: "left", backgroundColor: "#2E67F8" }}
        >
          <NavDropdown.Item onClick={() => sortAscending()}>
            Ascending
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => sortDescending()}>
            Descending
          </NavDropdown.Item>
        </NavDropdown>
      </div>

      <Container>
        <Row>
          {currentPosts.map((newdata) => {
            return (
              <Col
                className="col-md-3 my-2"
                key={newdata.id}
                style={{ textAlign: "left" }}
              >
                <Card>
                  <Card.Img variant="top" src={newdata.image} />
                  <Card.Body>
                    <Card.Title>Name :- {newdata.name}</Card.Title>
                    <Card.Text>
                      Price :- {newdata.price}
                      <br />
                      Category :- {newdata.category}
                      <br />
                      Slug :- {newdata.slug}
                    </Card.Text>
                    <Button variant="primary">View details</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div className="my-3">
          <CustomPagination
            postperpage={PER_PAGE}
            totalPost={data.length}
            paginatepage={paginate}
            page={page}
          />
        </div>
      </Container>
    </>
  );
}
