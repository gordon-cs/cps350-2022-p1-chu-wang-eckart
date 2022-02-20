const getWeatherIcon = (icon) => {
    let iconName = icon.toLowerCase();
    if (iconName.includes('night')) {
        if (iconName.includes('cloudy')) {
            return 'weather-night-partly-cloudy';
        }
        return 'weather-night';
    }
    if (iconName.includes('cloudy') || iconName.includes('overcast')) {
        if (iconName.includes('part')) {
            return 'weather-partly-cloudy';
        }
        return 'weather-cloudy';
    }
    if (iconName.includes('fog')) {
        return 'weather-fog';
    }
    if (iconName.includes('hail')) {
        return 'weather-hail';
    }
    if (iconName.includes('hazy')) {
        return 'weather-hazy';
    }
    if (iconName.includes('hurricane')) {
        return 'weather-hurricane';
    }
    if (iconName.includes('lightning')) {
        if (iconName.includes('rainy')) {
            return 'weather-lightning-rainy';
        }
        if (iconName.includes('part')) {
            return 'weather-partly-lightning';
        }
        return 'weather-lightning';
    }
    if (iconName.includes('rainy')) {
        if (iconName.includes('part')) {
            return 'weather-partly-rainy';
        }
        return 'weather-rainy';
    }
    if (iconName.includes('pouring')) {
        return 'weather-pouring';
    }
    if (iconName.includes('sunny') || iconName.includes('clear')) {
        return 'weather-sunny';
    }
    if (iconName.includes('tornado')) {
        return 'weather-tornado';
    }
    if (iconName.includes('windy') || iconName.includes('wind')) {
        return 'weather-windy';
    }
    if (iconName.includes('snowy')) {
        if (iconName.includes('heavy')) {
            return 'weather-snowy-heavy';
        }
        if (iconName.includes('rainy')) {
            if (iconName.includes('part')) {
                return 'weather-partly-snowy-rainy';
            }
            return 'weather-snowy-rainy';
        }
        if (iconName.includes('part')) {
            return 'weather-partly-snowy';
        }
        return 'weather-snowy';
    }
}

export default getWeatherIcon;