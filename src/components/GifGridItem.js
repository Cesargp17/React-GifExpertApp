import React from 'react';
import { Card, Text } from "@nextui-org/react";

export const GifGridItem = ({url, title}) => {

  return (

    <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
    <Card.Body>
    <div className="animate__animated animate__headShake">
    <Card.Header>
            <Text b>{title}</Text>
          </Card.Header>
        <img src={url} alt={title}/>
    </div>
    </Card.Body>
    </Card>

  )
}
