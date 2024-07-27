import React from 'react';
import publicationsData from '../data/pub.json'; // Adjust the path if the file is in a different directory
const Publications = () => {

    const formatAuthors = (authors) => {
      const authorList = authors.split(', ');
      return authors.split(', ').map((author, index) => {
          const isLastAuthor = index === authorList.length - 1;
          const isSpecialAuthor = author === 'A. B. Togueu Motcheyo';
      if (isSpecialAuthor) {
        return (
          <strong key={index} className="underline">
           <u>{index > 0 ? `, ${author}` : author}</u>
          </strong> 
        );
      }
     return (
        <span key={index}>
          {index > 0 && ', '}
          {isLastAuthor ? `${author}.` : author}
        </span>

      );
    });
  };

  return (
    <div className='container text-white' >
              <div className='row d-flex justify-content-center'>
              <div className='col-12 col-md-8 p-2 b'>
              <h4 className='fs-1   '>Publications</h4>

                  
      {publicationsData.publications.map((publication, index) => (
        <div key={index} className="mb-8">
          <h2 className="fs-3 font-bold mb-4">{publication.grade}</h2>
          <ul className="list-disc pl-5">
            {publication.papers.map((paper) => (
              <li key={paper.id} className="mb-2">
               <span>{paper.id}-:</span><b> {` ${paper.title},   `}</b>
                
                {formatAuthors(paper.authors)}
                <em>{paper.journal}</em> {paper.volume} ({paper.year}){' '}
                {paper.pages ? `pp. ${paper.pages}` : ''}.{' '}
                <a
                  href={paper.doi}
                 
                  className="text-blue-600 hover:underline"
                >
                  DOI
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>     
                </div>
              </div>
        
  );
};

export default Publications;
