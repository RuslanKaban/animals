import React, { useState, useEffect } from 'react';

function AnimalFacts() {
  const [fact, setFact] = useState('');
  
  // Функция для получения случайного факта
  const fetchFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact'); // можно менять URL на другой, если нужен другой тип фактов
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Ошибка загрузки факта:", error);
      setFact("Не удалось загрузить факт. Попробуйте еще раз.");
    }
  };

  // Загружаем первый факт при монтировании компонента
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Факт о животном</h1>
      <p>{fact}</p>
      <button onClick={fetchFact} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Получить новый факт
      </button>
    </div>
  );
}

export default AnimalFacts;