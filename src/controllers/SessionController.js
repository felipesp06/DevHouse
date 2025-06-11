
//metodos: index, show, update, store, destroy
/*
index: Listar todas as sessoes
show: Mostrar uma sessao especifica
update: quando queremos alterar uma sessao
store: Criar uma nova sessao
destroy: Deletar uma sessao
*/

import User from '../models/User';
class SessionController {

 async store(req, res) {
    const { email } = req.body;

    // Verifica se esse usuario ja existe
   let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    // Se o usuario ja existir, ele retorna o usuario

    return res.json(user);

  }
}

export default new SessionController();