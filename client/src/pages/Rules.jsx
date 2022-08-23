
// page de  reglement

import React from 'react';
import { useNavigate } from 'react-router-dom';





const
    Rules = () => {


        let navigate = useNavigate();
        function handleClick() {
            navigate('/profil')
        }



        return (
            <div className='rulesContainer'>



                <h1>Charte du forum </h1>
                <br />

                <span className='textRules'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt obcaecati laborum nisi eum pariatur et, eligendi vitae id, iure tempora tenetur eaque. Voluptatem optio quos dignissimos cupiditate officiis. Dolor, atque recusandae impedit quam voluptate sapiente doloribus fuga doloremque quidem magni aut alias harum possimus optio nihil excepturi vitae ipsa.</span>
                <br />
                <br />
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cupiditate labore laboriosam asperiores eaque! Corrupti veniam aliquid magnam, pariatur fugiat velit fugit voluptates expedita, facere voluptatem sunt culpa fuga optio, esse repellendus quidem autem blanditiis quo minima accusamus officia doloremque rem! Eius autem, rerum ut praesentium necessitatibus aspernatur quisquam atque possimus suscipit, excepturi aliquam est maiores illo repellat sunt totam in cupiditate ea accusantium dolorem amet adipisci fugiat natus iusto! Eveniet magni quasi tempora eius blanditiis repellat molestiae totam, optio nisi commodi error ad iste quas quia ratione eligendi suscipit fugiat? Eaque, et quaerat voluptates omnis dolorum nulla accusamus? Ut.</span>
                <br />


                <button className='btnRules' onClick={handleClick}>J'accepte</button >

            </div>
        );
    };


export default Rules;