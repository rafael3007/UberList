from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True
TAMANHO_PAGINA = 4

MYSQL_SERVER = "bduber"
MYSQL_USER = 'root'
MYSQL_PASS = 'admin'
MYSQL_BANCO = 'bduber'

def get_conexao_bd():
    conexao = mysql.connect(
        host = MYSQL_SERVER, user = MYSQL_USER, password = MYSQL_PASS, database = MYSQL_BANCO
    )
        
    return conexao
    

@servico.route("/veiculos/")
def get_veiculos():
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select * from veiculos"
    )
    
    resultado = cursor.fetchall()

    return jsonify(resultado)

@servico.route("/veiculo/<int:id>")
def get_veiculo(id):
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select * from veiculos where id = "+ str(id)+" "
    )
    
    resultado = cursor.fetchall()

    return jsonify(resultado)


@servico.route("/motoristas/")
def get_motoristas():
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select * from motoristas"
    )
    
    resultado = cursor.fetchall()

    return jsonify(resultado)


@servico.route("/motorista/<int:id>")
def get_motorista(id):
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select * from motoristas where id = "+ str(id)+" "
    )
    
    resultado = cursor.fetchall()

    return jsonify(resultado)

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )