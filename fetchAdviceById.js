const fetchAdviceById = async (id) => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const advice = data.slip.advice;
    return advice;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAdviceById;
