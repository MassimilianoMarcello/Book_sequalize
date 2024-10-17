const createBook = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER, // Assicurati che sia un INTEGER
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT, // Usa TEXT per descrizioni più lunghe
            allowNull: true
        }
    }, {
        timestamps: true // Questo abilita createdAt e updatedAt
    });

    return Book;
};

export default createBook;



