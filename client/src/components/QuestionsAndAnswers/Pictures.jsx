import React from 'react';

const Pictures = ({ pictures }) => {


	return (
		<div>
			{pictures.length > 0 ? (
				<div>
					{pictures.map((picture, i) => {
						return <img key={i} src={picture} style={{"height" : "150px", "width" : "200px"}} />;
					})}
				</div>
			) : (
				<span></span>
			)}
		</div>
	);
};


export default Pictures;