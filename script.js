// Variables for Grid Simulator
const nodes = document.querySelectorAll('.node');
const metrics = document.getElementById('grid-metrics');

// Variables for Real-Time Monitoring
const trafficData = document.getElementById('traffic-data');
const trafficGraph = document.getElementById('traffic-graph');

let tasksAllocated = 0;
let packetsPerSecond = 0;
let droppedPackets = 0;

// Simulate Task Allocation
function allocateTasks() {
    tasksAllocated++;
    const node = nodes[Math.floor(Math.random() * nodes.length)];

    // Visual animation for task allocation
    node.classList.add('allocated');
    setTimeout(() => node.classList.remove('allocated'), 1000);

    // Update metrics
    updateMetrics();
}

// Update Grid Metrics
function updateMetrics() {
    metrics.innerHTML = `
        <p>Tasks Allocated: ${tasksAllocated}</p>
        <p>Throughput: ${(tasksAllocated / 10).toFixed(2)} tasks/sec</p>
        <p>Latency: ${(Math.random() * 200).toFixed(2)} ms</p>
    `;
}

// Simulate Real-Time Traffic Data
function simulateTraffic() {
    packetsPerSecond = Math.floor(Math.random() * 1000) + 100;
    droppedPackets = Math.floor(Math.random() * 100);

    // Update traffic data display
    trafficData.innerHTML = `
        <p>Packets per Second: ${packetsPerSecond}</p>
        <p>Dropped Packets: ${droppedPackets}</p>
    `;

    // Update traffic graph (simple animation)
    const trafficBar = document.createElement('div');
    trafficBar.style.height = '10px';
    trafficBar.style.width = `${packetsPerSecond / 10}px`;
    trafficBar.style.background = packetsPerSecond > 800 ? 'red' : 'green';
    trafficBar.style.margin = '2px 0';

    if (trafficGraph.children.length > 20) {
        trafficGraph.removeChild(trafficGraph.firstChild);
    }
    trafficGraph.appendChild(trafficBar);
}

// Start Allocating Tasks
setInterval(allocateTasks, 2000);

// Simulate Traffic Monitoring
setInterval(simulateTraffic, 1000);

// Button Interactivity (Optional)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => (button.style.transform = 'scale(1)'), 100);
    });
});
