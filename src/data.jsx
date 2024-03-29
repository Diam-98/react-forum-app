import {
  EditOutlined,
  FileOutlined,
  QuestionOutlined,
  SaveOutlined,
} from '@ant-design/icons'

export const menuItem = [
  {
    id: 1,
    title: 'Toutes les Questions',
    icon: <QuestionOutlined />,
    path: '/',
  },
  {
    id: 2,
    title: 'Mes Questions',
    icon: <FileOutlined />,
    path: '/questions',
  },
  {
    id: 3,
    title: 'Responses',
    icon: <EditOutlined />,
    path: '/responses',
  },
  {
    id: 4,
    title: 'Sauvegarde',
    icon: <SaveOutlined />,
    path: '/save',
  },
]

export const questions = [
  {
    id: 1,
    title: 'Premiere question',
  },
  {
    id: 2,
    title: 'Deuxieme question',
  },
  {
    id: 3,
    title: 'Troisieme question',
  },
  {
    id: 4,
    title: 'Quatrieme question',
  },
]
