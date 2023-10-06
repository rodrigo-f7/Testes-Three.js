import * as THREE from 'three';

const scene = new THREE.Scene();

/*1º parâmetro é o FOV (campo de visão), dado em graus*/
//2º parâmetro é a proporção de tela
//3º e 4º parâmetro diz respeito à renderização dos objetos dado uma certa distância
const camera = new THREE.PerspectiveCamera( 75, innerWidth / window.innerHeight, 0.1, 1000)

//Em seguida o renderizador definido pela largura do documento
//Você pode utilizar false para mudar a resolução do seu documento e assim ganhar mais performance na função setSize
const renderer = new THREE.WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)

//Adição do renderizador ao documento HTML
document.body.appendChild(renderer.domElement)

//Criando cubo
//Nesse primeiro, utiliza-se três parâmetros para a criação: largura,altura,profundidade
const geometry = new THREE.BoxGeometry(1,1,1);

//Define-se o material do cubo, existem vários métodos porém esse será utilizado. Podem receber vários atributos, dentre eles a cor, nesse caso verde
const material = new THREE.MeshBasicMaterial( { color: 0x99f291 } );

//O Mesh une as características anteriores para criar o cubo, a forma e o material
const cube = new THREE.Mesh(geometry, material)

//Por padrão sempre adiciona nas coordenadas (0,0,0), o que implica na câmera estar dentro do cubo. Para modificar isso, mova a câmera um pouco
scene.add( cube )
//Definição da posição da câmera nos eixos x,y e z
camera.position.z = 10
//camera.position.y = 2
//camera.position.x = 3

//Isso cria um loop que renderiza a animação (normalmente a 60 frames p segundo) toda vez que recarrega a página
function animate(){
    requestAnimationFrame( animate )
    //Rotação do cubo
    cube.rotation.x = 0.01
    cube.rotation.y = 0.01
    cube.rotation.z = 0.01

    renderer.render(scene,cam