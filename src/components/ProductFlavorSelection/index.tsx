import { ProductFlavorStyled } from "./style"

const ProductFlavorSelection = () => {
  return (
    <ProductFlavorStyled>
      <span className="formTitle">Sabor</span>
      <div className="productFlavorSelection">
        <input type="radio" id="toffee" name="flavor" value="toffee" />
        <input type="radio" id="chocolate" name="flavor" value="chocolate" />
        <input type="radio" id="morango" name="flavor" value="morango" />
        <input type="radio" id="baunilha" name="flavor" value="baunilha" />

        <label htmlFor="toffee" className="flavorOption">
          <span>toffee</span>
        </label>
        <label htmlFor="chocolate" className="flavorOption">
          <span>chocolate</span>
        </label>
        <label htmlFor="morango" className="flavorOption">
          <span>morango</span>
        </label>
        <label htmlFor="baunilha" className="flavorOption">
          <span>baunilha</span>
        </label>
      </div>
    </ProductFlavorStyled>
  )
}

export default ProductFlavorSelection