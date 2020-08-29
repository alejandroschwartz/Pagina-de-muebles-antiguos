import React from 'react';
import '../assets/style/components/Section.scss'

const Section = () => (
    <article className="section__article">
        <hgroup className="section__article--header">
            <h1> Mesa estilo provenzal </h1>
            <h2> Mesa para 6 personas </h2>
        </hgroup>
        <p> Mesa de estilo provenzal para 6 personas restaurada. </p>
        <figure>
            <img className="section__article--image" src="mesa_provenzal.jpg" />
            <figcaption>
                <h4> fecha de carga: 09-08-2020 </h4>
            </figcaption>
        </figure>
    </article>
)

export default Section;
