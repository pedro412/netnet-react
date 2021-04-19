export const navItems = [
  {
    link: '/',
    name: 'Inicio',
    iconName: 'HomeIcon',
  },
  {
    link: '/proximamente',
    name: 'Próximamente',
    iconName: 'ComingSoonIcon',
  },
  {
    link: 'google.com',
    name: 'Buscar',
    icon: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L20 22L22 20L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z"
            fill="#686868"
          />
        </svg>
      );
    },
  },
  {
    link: 'google.com',
    name: 'Descargas',
    icon: () => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.4301 16.4301 20 12 20C7.56988 20 4 16.4301 4 12C4 7.56988 7.56988 4 12 4ZM11 7V13H8L12 17L16 13H13V7H11Z"
            fill="#686868"
          />
        </svg>
      );
    },
  },
];

export const moviesCarrusel = [
  {
    name: 'movie1',
    imgUrl:
      'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/IQGLPFN5WJHEBJRXFOEB4DXYZA.jpg',
  },
  {
    name: 'movie2',
    imgUrl:
      'https://www.muycomputer.com/wp-content/uploads/2020/01/thewitcher.jpg',
  },
  {
    name: 'movie3',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
  },
  {
    name: 'movie4',
    imgUrl:
      'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/1/e6/1e63923b-d8c4-55f4-a686-5ee77b63f059/548776f36b22f.image.jpg',
  },
  {
    name: 'movie5',
    imgUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/han-solo-una-historia-de-star-wars-1575448990.jpg',
  },
  {
    name: 'movie6',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81LHuCYlgEL._AC_SL1200_.jpg',
  },
];

export const movie = {
  title: 'Spider Man',
  moods: ['Surrealista', 'Distopico', 'Habil', 'Sinientro', 'Emocionante'],
  img:
    'https://raw.githubusercontent.com/kevin129412/netnet/main/icons/judeus-samson-rAomxXulMNM-unsplash.jpg',
};
