import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Text, Container, Card, Row } from '@nextui-org/react';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cesar']);

     const handleAdd = ()=>{
         setCategories([...categories, 'Gokú']);
     }

    return (
        <>
        <Container fluid>
            <Card.Body>
                <Row justify="center" align="center">
                    <Text h1 size={60} css={{textGradient: "45deg, $yellow600 -20%, $red600 100%",}} weight="bold"><h2>GifExpertApp</h2></Text>
                    </Row>
             </Card.Body>
        </Container>

                <AddCategory setCategories={setCategories}/>
        <hr/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp;