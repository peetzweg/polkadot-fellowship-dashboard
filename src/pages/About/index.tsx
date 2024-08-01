import { Button } from '@/components/ui/button'
import { RequestsGrid } from './RequestsGrid'

type Props = {
  lcStatus: boolean
}

const openInNewTab = (url: string | URL | undefined) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const About = ({ lcStatus }: Props) => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:mx-[5%] xl:mx-[20%] mx-0 sm:px-6 sm:py-0 md:gap-8">
      <h1 className="font-unbounded text-primary flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        ABOUT
      </h1>
      <div className="pageTop">
        <p>
          The Polkadot Technical Fellowship is a self-governing body of experts
          and developers of Polkadot and Kusama networks. It operates on-chain
          through the Polkadot
          <a
            target="_blank"
            href={
              'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot-collectives-rpc.polkadot.io#/fellowship/referenda'
            }
          >
            Collectives
          </a>
          system chain and off-chain through the{' '}
          <a target="_blank" href={'https://github.com/polkadot-fellows'}>
            Polkadot Fellows
          </a>{' '}
          repository.
        </p>
        <Button
          className="mt-6"
          onClick={() =>
            openInNewTab(
              'https://github.com/polkadot-fellows/manifesto/blob/0c3df46d76625980b8b48742cb86f4d8fa6dda8d/manifesto.pdf',
            )
          }
        >
          Read through the Fellowship Manifesto
        </Button>
      </div>
      <h1>Members</h1>
      <div className="pageTop">
        List of members and candidates currently inducted in the Fellowship
        Collective.
      </div>
      <div style={{ paddingTop: '2rem' }}>
        <RequestsGrid />
      </div>
    </main>
  )
}
