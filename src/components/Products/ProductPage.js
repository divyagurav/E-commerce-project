import { useParams } from "react-router-dom";
import Header from "../Layout/Header";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function ProductPage() {
  const params = useParams();

  const quote = productsArr.find((quote) => quote.id === params.productId);

  if (!quote) {
    return <h1>No Page found...!</h1>;
  }

  return (
    <div>
      <Header />
      <div>
        <h1>Product Details</h1>
        <div
          style={{
            padding: "25px",
            backgroundColor: "GrayText",
            width: "500px",
            height: "520px",
            margin: "auto",
            overflow: "scroll",
          }}
        >
          <img src={quote.imageUrl}></img>
          <p style={{ color: "white", marginTop: "20px" }}>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
