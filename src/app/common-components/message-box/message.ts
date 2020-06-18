export interface Message {
    message: string;
    icon: string;
    style: any;
}

const config = {
    success: { icon: '<i class="fas fa-2x fa-check"></i>', style: { 'background-color': '#00796b', 'color': '#ffffff' } },
    warning: { icon: '<i class="fas fa-2x fa-exclamation-triangle"></i>', style: { 'background-color': '#bc5100', 'color': '#ffffff' } },
    error: { icon: '<i class="fas fa-2x fa-times"></i>', style: { 'background-color': '#b71c1c', 'color': '#ffffff' } }
}

export function createMessage(type: string, message: string): Message {
    if (type in config) {
        return { message: message, icon: config[type].icon, style: config[type].style }
    }
    
    return { message: message, icon: null, style: null };
}