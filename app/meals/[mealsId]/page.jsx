import React from 'react';

const Page = ({ params }) => {
    return (
        <div>
            meals id : {params.mealsId}
        </div>
    );
};

export default Page;