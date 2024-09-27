const convertDate = (orderDate) => {
    const date = new Date(orderDate);
    const formattedDate = date.toLocaleDateString('vi-VN');
    return formattedDate;
};

export default convertDate;
