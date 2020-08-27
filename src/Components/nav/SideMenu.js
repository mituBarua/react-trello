import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Drawer,Grow} from '@material-ui/core';
import colors from '../../utils/color';
import { getImages } from '../../utils/imageApi';


const useStyles = makeStyles((theme) => ({
    drawer : {
        width:'400px',
    },
    menu: {
        marginTop:theme.spacing(2),
        display:'flex',
        justifyContent:'space-around',
    },
    box: {
        width:'45%',
        height:'90px',
        backgroundColor:'blue',
        borderRadius:'9px',
        marginBottom: theme.spacing(2),
    },
    optionContainer: {
     display: 'flex',
     flexWrap : 'wrap',
     justifyContent: 'space-around',
    },
}));
export default function SideMenu({setOpenSideMenu,openSideMenu,setNewBgImage}) {
    const classes = useStyles();
    const [openOptionColor,setOpenOptionColor] = useState(false);
    const [openOptionImage,setOpenOptionImage] = useState(false);
    const [images,setImages] = useState([]);

    const getListOfImage = async () => {
        const listOfImages = await getImages();
        setImages(listOfImages);
    }

    useEffect(() => { 
        getListOfImage();
     
    },[]);


    return (
        <div>
            <Drawer open={openSideMenu} anchor='right'
             onClose={() =>setOpenSideMenu(false)}>

            <div  className={classes.drawer}>
                   <div className={classes.menu}>
                    <div className={classes.box}
                     style={{
                        backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Neckertal_20150527-6384.jpg/1200px-Neckertal_20150527-6384.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',

                    }}
                  
                    onClick= {() => setOpenOptionImage(true)}
                    ></div>
                    <div className={classes.box}
                    style={{
                        backgroundImage:'url(https://digitalsynopsis.com/wp-content/uploads/2017/08/beautiful-color-schemes-combinations-palettes.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',

                    }}
                    onClick= {() =>  { 
                    setOpenOptionColor(true);
                    setOpenOptionImage(false);
                }}
                    
                    ></div>
                </div>

                {openOptionImage ? 
                 
                  ( <Grow in = {openOptionImage}>
                 <div className={classes.optionContainer}>
                  {images.map ((image , index) => {
                      return (
                          <div 
                          key={index}
                          className={classes.box}
                          style = {{
                              backgroundImage: `url(${image.thumb})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                          }}
                          onClick={() => setNewBgImage(image.full)}
                          ></div>
                      );
                  })}
                 </div>
               </Grow> 
               )
               : (
                <Grow in = {openOptionColor}>
                <div className={classes.optionContainer}>
                 {colors.map ((color , index) => {
                     return (
                         <div 
                         key={index}
                         className={classes.box}
                         style = {{
                             backgroundColor: color,
                         }}
                         onClick ={() => setNewBgImage(color)}
                         ></div>
                     );
                 })}
                </div>
              </Grow>
               )}
             
              
            </div>
           </Drawer>
        </div>
    );
}