var personSQL = {
    insert:'INSERT INTO person(id,name,age,sex,birth) VALUES(?,?,?,?,?)',
    queryAll:'SELECT * FROM person',
    deleteById:'DELETE FROM person WHERE id = ? ',
    updatePerson:'UPDATE person SET name = ?,age = ?,sex = ?,birth = ? WHERE id = ?',
    getPersonByName:'SELECT * FROM person WHERE name = ? ',
};
module.exports = personSQL;