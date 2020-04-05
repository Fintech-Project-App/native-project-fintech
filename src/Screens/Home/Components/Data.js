import Topup from '../../../Helpers/Image/topup.png';
import History from '../../../Helpers/Image/history.png';
import TF from '../../../Helpers/Image/trans.png';

export default data = [
  {
    image: Topup,
    title: 'Top Up',
    navigate: 'TopupNavigate',
  },
  {
    image: TF,
    title: 'Transfer',
    navigate: 'TransferNavigate',
    params: {
      screen: 'Transfer',
      params: { userId: 0 },
    }
  },
  {
    image: History,
    title: 'History',
    navigate: 'HistoryNavigate',
  },
];
