import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';

import { Title, CategoryContainer } from './Category.styles'
import ProductCard from '../../components/Product-card/Product-card';
import Spinner from '../../components/Spinner/Spinner';

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>
                        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
                    </CategoryContainer>
                )
            }
        </ Fragment>

    )
}

export default Category;