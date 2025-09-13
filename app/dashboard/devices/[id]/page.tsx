import DeviceDetail from './DeviceDetail'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  // await Promise.resolve() kullanarak params'ın Promise'ini çözüyoruz
  await Promise.resolve()
  return <DeviceDetail deviceId={params.id} />
}