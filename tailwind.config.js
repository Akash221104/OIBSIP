/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: 
    {
      keyframes:{
        'trans-right':{
       ' 0%':{transform:'translateX(-80px) ;opacity:0'} ,
            
       ' 100%':{transform:'translateX(10px) ;opacity:1'} ,
      },
      'trans-top':{
        ' 0%':{transform:'translateY(-10px) ;opacity:0'} ,
             
        ' 100%':{transform:'translateY(10px) ;opacity:1'} ,
       },
       'trans-bottom':{
        ' 0%':{transform:'translateY(-60px) ;opacity:0'} ,
             
        ' 100%':{transform:'translateY(0px) ;opacity:1'} ,
       },

    },
    animation:{
      'trans-right':'trans-right 1.5s ease infinite',
      'trans-top':'trans-top 1.5s ease forwards',
      'trans-bottom':'trans-bottom 1.5s ease forwards'
      

    },
    
    
    
     
    },
  },
  plugins: [],
}

