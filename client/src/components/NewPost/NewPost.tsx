/*
************************************************************
*                                                          *
*   Flowhooks Software - Open Source License               *
*                                                          *
*  This software is licensed under the GNU Affero General   *
*  Public License v3. You may use, modify, and distribute   *
*  this code under the terms of the AGPLv3.                *
*                                                          *
*  This program is distributed in the hope that it will be  *
*  useful, but WITHOUT ANY WARRANTY; without even the       *
*  implied warranty of MERCHANTABILITY or FITNESS FOR A     *
*  PARTICULAR PURPOSE. See the GNU AGPLv3 for more details. *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
// src/components/NewPost.tsx

import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const NewPost: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  const handlePost = () => {
    // Handle the post submission logic here
    console.log('Conteúdo da postagem:', content);
    console.log('Anônimo:', isAnonymous);
    
    // Clear the textarea and checkbox after posting
    setContent('');
    setIsAnonymous(false);
  };

  return (
    <div className="my-4">
      <div className="border rounded shadow p-4">
        <h3>Criar um Novo Post</h3>
        <FloatingLabel 
          controlId="floatingTextarea2" 
          label="O que você está pensando?" 
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Deixe um comentário aqui"
            className="bg-light" // Use Bootstrap's bg-light class for a light gray background
            style={{ height: '150px' }} // Keep the border color
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FloatingLabel>
        <Form.Check 
          type="checkbox" 
          id="anonymousCheckbox" 
          label="Postar Anonimamente" 
          className="mt-2"
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
        />
        <div className="mt-3">
          <Button 
            variant="primary" 
            onClick={handlePost} 
            disabled={!content.trim()}
          >
            Postar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
