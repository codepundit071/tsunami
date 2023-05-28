import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';

interface Tab {
  text: string;
  content: () => JSX.Element;
}

const TABS: Tab[] = [
  {
    text: 'ZK-SNARKS Explained',
    content: () => {
      return (
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="text-base font-bold">ZK Snarks Explained</h1>
          <div className={'flex flex-col flex-wrap items-center gap-2'}>
            <span
              className={'max-w-[700px] text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              ZK Snarks represent a sophisticated type of zero-knowledge proof
              system that enables the creation of concise and efficient proofs
              that third parties can easily verify. Essentially, ZK Snarks
              transform a complex computation into proof that a third party can
              quickly and securely verify. This process provides a high degree
              of privacy for transactions, allowing both parties to maintain
              anonymity while completing their transactions.
              <br />
              <br />
              While there are different methods for implementing ZK, SNARK
              (Succinct, Non-Interactive Argument of Knowledge) is one of the
              most advanced techniques. What makes ZK-SNARK unique is its
              ability to provide a succinct, non-interactive, and argument-based
              approach to proof construction.
              <br />
              <br />
              The "S" in SNARK stands for "succinct," which refers to the
              ability of the system to handle heavy computational transactions
              by introducing brevity into the process. The "N" stands for
              "non-interactive," which means that provers and verifiers do not
              need to relate to one another. This feature allows ZK-SNARK to
              eliminate the need for simultaneous relations between the provers
              and verifiers by handling the interaction through the ZK stack.
              <br />
              <br />
              The "AR" in SNARK stands for "argument," which is the mechanism
              that enables provers to convince verifiers of the correctness of a
              statement. This process requires significant computational power.
              The "K" stands for "knowledge," which refers to the information
              extracted by the extractor to determine whether a statement is
              true or false.
              <br />
              <br />
              Finally, the arithmetic circuits in ZK-SNARK are essential to the
              system's implementation. The circuit is a finite field N element
              that can determine whether a statement is true or false. This
              circuit is constructed using an argument system arithmetic
              approach that combines the public and private statements in a
              finite field to produce a result in field F. This formula can be
              expressed as C(x,y) → F, where x represents the public statement,
              y represents the private statement, and C represents the circuit.
              <br />
              <br />
              Let C be a circuit over a finite field N, such that C(x,y) → F,
              where x ∈ N represents the public statement, and y ∈ N represents
              the private statement, and F is a field. The argument system
              arithmetic can be described as follows:
              <br />
              <br />
              <code className="m-auto flex w-max flex-col text-center font-po text-2xl">
                <span>C(x,y) → F, where x ∈ N</span>
                <span className="text-sm">
                  Circuit(Public Statement in Finite Field + Private Statement
                  in Finite Field) → F
                </span>
              </code>
              <br />
              <br />
              Thus, the function C takes two inputs, x, and y, where x
              represents the public statement and y represents the private
              statement. The output of the function is F, a field, indicating
              whether the statement is true or false.
              <br />
              <br />
              Overall, ZK Snarks provide a highly sophisticated and effective
              means of ensuring privacy in transactions while maintaining a high
              level of security and efficiency. The combination of succinct,
              non-interactive, argument-based proof construction and the use of
              advanced arithmetic circuits makes ZK-SNARK a compelling option
              for organizations seeking a secure and private means of conducting
              transactions.
            </span>
          </div>
        </div>
      );
    },
  },
  {
    text: 'Benefits of ZK Snarks',
    content: () => {
      return (
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="text-base font-bold">Benefits of ZK Snarks</h1>
          <div className={'flex flex-col flex-wrap items-center gap-2'}>
            <span
              className={'max-w-[500px] text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              One of the main benefits of ZK Snarks is their ability to provide
              privacy in transactions. Both parties must reveal their identities
              to complete a transaction in traditional transactions.
              <br />
              <br />
              However, with ZK Snarks, both parties can remain anonymous while
              completing the transaction. ZK Snarks can also be used to ensure
              that a computation was performed correctly without revealing any
              of the inputs or outputs of the computation
              <br />
              <br />
              This technology is versatile and can be used in various
              applications such as cryptocurrencies, voting systems, and
              identity verification systems.
              <br />
              <br />
              <span className="m-auto flex w-max flex-col text-center font-po text-base font-bold">
                1. ZK Snarks in Identity Verification Systems
              </span>
              ZK Snarks can be used in identity verification systems to verify
              the identity of a user without requiring the user to reveal their
              personal information. This technology can help protect user
              privacy while ensuring the integrity of the verification process.
              With ZK Snarks, users can prove their identity without revealing
              sensitive information.
              <br />
              <br />
              For example, the uPort platform uses ZK Snarks to verify user
              identities on the Ethereum blockchain, ensuring that personal
              information is kept private while providing high security and
              accuracy in identity verification.
              <br />
              <br />
              <span className="m-auto flex w-max flex-col text-center font-po text-base font-bold">
                2. ZK Snarks in Cryptocurrencies
              </span>
              ZK Snarks can provide transaction privacy without sacrificing
              network security. This technology can conceal the sender and
              receiver's identity while ensuring the transaction's integrity.
              <br />
              <br />
              For example, the cryptocurrency Zcash uses ZK Snarks to enable
              anonymous transactions, allowing users to send and receive funds
              without revealing their identities or transaction details to
              others on the network. This approach provides a high level of
              privacy for users while maintaining the integrity and security of
              the transaction system.
              <br />
              <br />
              <span className="m-auto flex w-max flex-col text-center font-po text-base font-bold">
                3. ZK Snarks in Voting Systems
              </span>
              Voting systems can also benefit from ZK Snarks. ZK Snarks can be
              used to ensure that a vote was counted correctly without revealing
              the voter's identity. This technology can help prevent voter fraud
              and ensure the integrity of the voting system. With ZK Snarks,
              voters can vote anonymously without fear of revealing their
              identity.
            </span>
          </div>
          <h1 className="text-base font-bold text-red-500">Limitations</h1>
          <div className={'flex flex-col flex-wrap items-center gap-2'}>
            <span
              className={'max-w-[500px] text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              1. Trusted Setup: ZK Snarks require a trusted setup, which can be
              a security concern. During the setup, parameters are generated to
              generate the proofs.The system's security can also be compromised
              if these parameters are compromised. While there are methods to
              mitigate this risk, such as multi-party computation, the trusted
              setup remains a potential vulnerability.
              <br />
              <br />
              2. High Computational Requirements: ZK Snarks require significant
              computational power to generate the proofs, making them expensive
              and slow to use. This computational requirement makes it
              challenging to use ZK Snarks in real-time applications and can
              limit their scalability.
            </span>
          </div>
        </div>
      );
    },
  },
  {
    text: 'Limitations',
    content: () => (
      <div className="flex h-full w-full flex-col items-center">
        <h1 className="text-base font-bold text-red-500">Limitations</h1>
        <div className={'flex flex-col flex-wrap items-center gap-2'}>
          <span
            className={'max-w-[500px] text-justify'}
            style={{
              textAlignLast: 'justify',
            }}
          >
            1. Trusted Setup: ZK Snarks require a trusted setup, which can be a
            security concern. During the setup, parameters are generated to
            generate the proofs.The system's security can also be compromised if
            these parameters are compromised. While there are methods to
            mitigate this risk, such as multi-party computation, the trusted
            setup remains a potential vulnerability.
            <br />
            <br />
            2. High Computational Requirements: ZK Snarks require significant
            computational power to generate the proofs, making them expensive
            and slow to use. This computational requirement makes it challenging
            to use ZK Snarks in real-time applications and can limit their
            scalability.
          </span>
        </div>
      </div>
    ),
  },
];

export const ZKSnarkInfo = () => {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-black px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <div className="flex w-3/4 flex-row items-center justify-center gap-4 bg-black">
        {TABS.map((t) => (
          <a
            key={t.text}
            className={
              'cursor-pointer text-lg transition-all  hover:translate-x-[1px] hover:translate-y-[-1px]'
            }
            onClick={() => {
              setTab(t);
            }}
          >
            {t.text}
          </a>
        ))}
      </div>
      {tab?.content()}
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'zkSnarkInfo',
  icon: '/desktopIcon/zk-snarks.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'ZK-SNARKs?',
  actions: 'ALL',
  extraAction: [],
  allowResize: {
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    left: true,
    right: true,
    top: true,
    topLeft: true,
    topRight: true,
  },
  state: 'HIDDEN',
  top: () => (
    <WebAddress
      icon={APP_CONFIG.icon}
      address={'https://www.zktsunami.io/zksnarks.html'}
    />
  ),
  component: <ZKSnarkInfo />,
};
