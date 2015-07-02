var indices = {
    'blog': ['20140910', '20090514', '20090513', '20090508', '20090501', '20081124', '20081115'],
    'gist': []
};

var gists = {
};

var blogs = {
    '20140910': {
        style: {
            width: '334px', 
            height: '400px',
            background: '#FFF url("http://40.media.tumblr.com/271301eff3600516c92dec120f3d8c2b/tumblr_nbp5otcjXT1qzgyeso1_500.jpg") 20% 10% no-repeat'
        },
        title: {
            value: ['Yes, Ma\'am'],
            style: {
                position: 'relative',
                top: '20px', 
                right: '20px', 
                textAlign: 'right',
                color: 'white' 
            }
        },
        content: {
            value: ['we shall play together!'],
            style: {
                position: 'relative',
                top: '35px',
                right:'20px', 
                textAlign:'right',
                color: '#cccccc'
            }
        },
    },
    '20090514': {
        style: {
            width: '334px', 
            height: '400px',
            background: '#FFF url("http://lh4.ggpht.com/_z-SGyFvIzXc/ShO-EFJcjgI/AAAAAAAAAkg/4XiVMMwgu64/s400/IMG_0117.JPG") no-repeat 0'
        },
        title: {
            value: ['Little Alley'],
            style: {
                position: 'relative',
                top: '20px', 
                left: '20px', 
                textAlign: 'left',
                color: 'white' 
            }
        },
        content: {
            value: ['the weather was dry', React.DOM.br(), 'no bird saw fly; ', React.DOM.br(), 'at a little alley, ', React.DOM.br(), 'i looked up to the sky.'],
            style: {
                position: 'relative',
                top: '35px',
                left:'20px', 
                paddingRight:'10px',
                textAlign:'left',
                color: '#cccccc'
            }
        },
    },
    '20090513': {
        style: {
            width: '334px', 
            height: '400px',
            background: '#FFF url("http://lh5.ggpht.com/_z-SGyFvIzXc/ShO9_MKBxHI/AAAAAAAAAkc/1LgiPHjaoaU/s400/IMG_0114.JPG") no-repeat 0'
        },
        title: {
            value: [' Ain\'t Finished Yet'],
            style: {
                position: 'relative',
                top: '325px', 
                fontWeight: '400',
                textAlign:'center'
            }
        },
        content: {
            value: ['a lots to do still.'],
            style: {
                position: 'relative',
                top: '335px',
                paddingLeft:'10px',
                paddingRight:'10px',
                textAlign:'center'
            }
        },
    },
    '20090508': {
        style: {
            width: '334px', 
            height: '400px',
            background: '#FFF url("http://lh5.ggpht.com/_z-SGyFvIzXc/SgnB0qi9KJI/AAAAAAAAAjg/T0N7Z_lHPHo/s400/IMG_0113.JPG") no-repeat 0'
        },
        title: {
            value: [' On the Way Home'],
            style: {
                position: 'relative',
                top: '325px', 
                textAlign:'center'
            }
        },
        content: {
            value: ['was on the way home upon a bridge nearby my place. this picture was then took for no reason.'],
            style: {
                position: 'relative',
                top: '335px',
                paddingLeft:'10px',
                paddingRight:'10px',
                textAlign:'center'
            }
        },
    },
    '20090501': {
        style: {
            width: '307px', 
            height: '400px',
            background: '#FFF url("http://lh4.ggpht.com/_z-SGyFvIzXc/SgokHHF1vdI/AAAAAAAAAkA/ajQcxcp44vg/s400/IMG_0083.JPG") no-repeat 0'
        },
        title: {
            value: [React.DOM.br(), 'Slow Waves'],
            style: {
                position: 'relative',
                top: '275px', 
                textAlign:'center',
                color: 'white'
            }
        },
        content: {
            value: ['i love the sound of waves,', React.DOM.br(), 'it always brings me peace.'],
            style: {
                position: 'relative',
                top: '285px',
                paddingLeft:'20px',
                paddingRight:'20px',
                textAlign:'center',
                color: '#cccccc'
            }
        },
    },
    '20081124': {
        style: {
            width: '400px', 
            height: '400px',
            background: '#FFF url("http://lh6.ggpht.com/_z-SGyFvIzXc/SgrfFRFquAI/AAAAAAAAAkU/nhMSXNcgdKA/s400/IMG_0022.JPG") no-repeat 0'
        },
        title: {
            value: [React.DOM.br(), 'The Monkey from NYU'],
            style: {
                position: 'relative',
                top: '10px', 
                left: '10px', 
                textAlign:'center',
                color: 'white'
            }
        },
        content: {
            value: ['hey,', React.DOM.br(), 'this one was expensive.'],
            style: {
                position: 'relative',
                top: '310px',
                paddingLeft:'20px',
                paddingRight:'10px',
                fontFamily: 'monospace',
                textAlign:'right',
                color: '#cceeee'
            }
        },
    },
    '20081115': {
        style: {
            width: '400px', 
            height: '300px',
            background: '#FFF url("http://lh4.ggpht.com/_z-SGyFvIzXc/Sgrhs9ZiKpI/AAAAAAAAAkY/lnZr8E4JJ9I/s400/IMG_0011.JPG") no-repeat 0'
        },
        title: {
            value: [React.DOM.br(), 'Blue Sky'],
            style: {
                position: 'relative',
                top: '150px', 
                textAlign:'center',
                color: 'white'
            }
        },
        content: {
            value: ['the sky was blue, the cloud was white; and i felt open minded.'],
            style: {
                position: 'relative',
                top: '250px',
                paddingLeft:'20px',
                paddingRight:'20px',
                textAlign:'center',
                color: '#336699'
            }
        },
    }
};
