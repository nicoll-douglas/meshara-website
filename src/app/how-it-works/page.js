import { Text } from "@radix-ui/themes";
import PageTransition from "@/components/common/PageTransition";
import TextSection from "@/components/common/TextSection";

export const metadata = {
  title: "Meshara | How It Works",
};

export default function HowItWorks() {
  return (
      <PageTransition>
        <TextSection heading={"How it Works"}>
          <Text size={"4"} align={"center"}>
            Meshara provides resilient, low-cost connectivity through a network of self-sustaining nodes that can be quickly deployed across remote or underserved regions. Using modular, decentralized infrastructure, Meshara bypasses the need for expensive traditional cell towers, offering a scalable solution adapted to various environments. Our mission is to connect communities to essential services, from emergency communications to secure financial transactions, where traditional connectivity solutions fall short.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Competitive Analysis</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Traditional networks face high costs, long deployment times, and difficulties with scalability. Existing mesh networks often attempt to address these issues but can lack the scalability, security, and cost-efficiency needed for widespread applications. Meshara fills this gap by:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Reducing Costs: Our nodes are deployable with six-figure budgets rather than the multimillion-dollar infrastructure required by conventional networks.
          </Text>
          <Text size={"4"} align={"center"}>
            • Scalability: Meshara’s nodes connect seamlessly, allowing for rapid expansion as communities grow.
          </Text>
          <Text size={"4"} align={"center"}>
            • Enhanced Security: Decentralized data distribution across the network makes it resilient against tampering and reduces single points of failure.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Energy Efficiency</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Meshara’s nodes are built for low energy consumption, designed to operate sustainably in any environment:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Solar-Powered Nodes: These modules can function off-grid indefinitely, ideal for areas without consistent power sources.
          </Text>
          <Text size={"4"} align={"center"}>
            • Battery Life and Sustainability: Energy-efficient components extend operational time, ensuring uninterrupted service.
          </Text>
          <Text size={"4"} align={"center"}>
            • Weatherproof Resilience: Nodes are built to withstand various environmental conditions with minimal maintenance.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Simple Setup</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Meshara’s infrastructure is designed for quick deployment and minimal technical demands:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Quick Deployment: Each node can be operational in minutes, supporting rapid responses in emergency or disaster situations.
          </Text>
          <Text size={"4"} align={"center"}>
            • Self-Configuring Network: The nodes automatically detect and connect with nearby devices, establishing a stable network without requiring user intervention.
          </Text>
          <Text size={"4"} align={"center"}>
            • Compact, Modular Design: Each lightweight node can be easily transported and deployed in remote or hard-to-reach locations.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Network Landscape</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Each Meshara node provides expansive coverage, up to 7 km in most conditions or up to 15 km in optimal settings:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Extended Reach: The network’s mesh structure enables communication across vast areas, connecting isolated communities.
          </Text>
          <Text size={"4"} align={"center"}>
            • Flexible Coverage Density: Additional nodes can be easily added to reinforce the network, ensuring reliable coverage in both sparsely and densely populated areas.
          </Text>
          <Text size={"4"} align={"center"}>
            • Interconnected Nodes: Linked nodes allow data to travel smoothly across the network, reducing failure points and ensuring reliable service.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Adaptation for Customer Services</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Meshara offers a foundation for integrating essential services within the network:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Emergency Communication: Meshara provides reliable communication channels in crisis situations, ensuring fast, secure information sharing among emergency responders and the affected.
          </Text>
          <Text size={"4"} align={"center"}>
            • Financial Transactions: The network enables secure, low-cost financial transactions, supporting local economies and promoting financial inclusion.
          </Text>
          <Text size={"4"} align={"center"}>
            • Disaster Warning Systems: Meshara supports early warning systems for natural disasters, delivering critical alerts and updates to communities in real-time.
          </Text>
          <Text size={"4"} align={"center"} mt={"4"}>
            <strong>Connecting to Regular Internet</strong>
          </Text>
          <Text size={"4"} align={"center"}>
            Meshara can link to conventional internet where available, extending connectivity to previously unreachable areas:
          </Text>
          <Text size={"4"} align={"center"} mt={"2"}>
            • Hybrid Connectivity: Meshara nodes can connect to internet gateways when feasible, providing communities with intermittent or full internet access as an extension of the Meshara network.
          </Text>
          <Text size={"4"} align={"center"}>
            • Local Data Storage and Transfer: In regions without internet, data is stored locally within the network, allowing essential service functions without constant internet dependency.
          </Text>
          <Text size={"4"} align={"center"}>
            • Flexible Integration: Meshara can function as a stand-alone network or complement existing infrastructure, bridging connectivity gaps efficiently.
          </Text>
        </TextSection>
      </PageTransition>
  );
}