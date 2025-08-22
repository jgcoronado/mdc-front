import { useRouter } from 'vue-router'

const router = useRouter();

export function goToMarcha(id) {
  router.push({
    name: 'marchaDetail',
    params: {
      id,
    },
  });
};

export function goToAutor(id) {
  router.push({
    name: 'autorDetail',
    params: {
      id,
    },
  });
};

export function goToBanda(id) {
  router.push({
    name: 'bandaDetail',
    params: {
      id,
    },
  });
};

/**
 * 
 * @param {*} page = ['marcha','autor','banda','disco']
 * @param {*} id 
 */
export function goToDetail(page, id) {
  router.push({
    name: `${page}Detail`,
    params: {
      id,
    },
  });
};