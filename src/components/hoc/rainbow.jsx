import React from 'react';

const Rainbow = (WrappedComponent) => {
    const images = ['lion','elephant','giraffe','hyaena','cheetah','white-rhino'];
    const randomImage = images[Math.floor(Math.random() * 5)];
    const imageName = '../../../assets/images/animals/' + randomImage + '.jpg';

    return (props) => {
        return (
          <div style={{margin: "15px 0px 15px 0px", padding: "15px 15px 15px 15px", borderRadius: 6, border: "solid 1px #d8d8d8"}}>
            <WrappedComponent {...props} />
            <img src={imageName} className="img-fluid" alt={imageName} />
          </div>
        )
    }
}
 
export default Rainbow;