import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IMAGES } from '../../assets';

const Images = () => {

    let itemData = [];
    for ( let i = 24; i < 48; i++ ) {
        if ( i != 25 ) {
            itemData.push( {
                title: `ROOM${ i + 1 }`,
                img: `${ IMAGES.ROOMS[ `ROOM${ i + 1 }` ] }`
            } )
        }
    }

    return (
        <Box sx={ { paddingTop: "2.5rem", width: "100vw" } }>
            <ImageList variant="masonry" cols={ 3 } gap={ 8 }>
                { itemData.map( ( item ) => (
                    <ImageListItem key={ item.img }>
                        <img
                            src={ `${ item.img }?w=248&fit=crop&auto=format` }
                            // srcSet={ `${ item.img }?w=248&fit=crop&auto=format&dpr=2 2x` }
                            alt={ item.title }
                            loading="lazy"
                        />
                    </ImageListItem>
                ) ) }
            </ImageList>
        </Box>
    );
}
export default Images;