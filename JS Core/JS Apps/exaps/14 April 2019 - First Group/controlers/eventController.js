const eventController = function () {

    const getEventFormTemplate = function (ctx) {

        ctx.loggedIn = storage.getData('token') !== null;
        ctx.username = storage.getData('username');

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        })
            .then(function () {
                if (ctx.loggedIn) {
                    this.partial('./views/eventTemplates/organizeEventForm.hbs');
                }
            })
    }

    const createEventData = function (ctx) {
        const eventName = document.querySelector('#inputEventName').value;
        const eventDate = document.querySelector('#inpuEventDate').value;
        const eventDescription = document.querySelector('#inputEventDescription').value;
        const eventImage = document.querySelector('#inputEventImage').value;

        const nameCheck = eventName.length >= 6;
        const dateCheck = /^[\d]{2}[ ][a-zA-Z -\d]+/g.test(eventDate);
        const descriptionCheck = eventDescription.length >= 6;;
        const imageCheck = /^https?:\/\/.+/g.test(eventImage);

        if (nameCheck && dateCheck && descriptionCheck && imageCheck) {

            const event = {
                'eventName': eventName,
                'eventDate': eventDate,
                'eventDescription': eventDescription,
                'eventImage': eventImage,
                'organizer': storage.getData('username'),
                'interestedPeople': 0,
            }

            const eventHeaders = {
                body: JSON.stringify(event),
                headers: {},
            };

            const loginUrl = storage.baseUrl + '/appdata/' + storage.appKey + '/events'

            requester.post(loginUrl, eventHeaders)
                .then(() => ctx.redirect('#/home'));

        } else {
            handler.showError('The event name should be at least 6 characters long. The date should be in string format (24 February; 24 March - 10 PM;). The description should be at least 10 characters long. The image should start with "http://" or "https://".');
        }
    }

    const getAllEvents = function () {
        return requester.get('events', 'appdata', 'Kinvey')
    }

    const getCurrentEvent = function (ctx) {
        requester.get(`events/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');
                ctx.organizerCheck = ctx.username === ctx.event.organizer;

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                })
                    .then(function () {
                        if (ctx.loggedIn) {
                            this.partial('./views/eventTemplates/event-details.hbs');
                        }
                    })
            })



    }

    const getEditTemplate = function (ctx) {

        requester.get(`events/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {
                ctx.loggedIn = storage.getData('token') !== null;
                ctx.username = storage.getData('username');

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                })
                    .then(function () {
                        if (ctx.loggedIn) {
                            this.partial('./views/eventTemplates/event-edit.hbs');
                        }
                    })
            })
    }

    const postEdit = function (ctx) {

        requester.get(`events/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {
                const body = {
                    eventName: ctx.params.name,
                    eventDate: ctx.params.dateTime,
                    eventDescription: ctx.params.description,
                    eventImage: ctx.params.imageURL,
                    organizer: ctx.event.organizer,
                    interestedPeople: ctx.event.interestedPeople,
                }

                requester.put(`events/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                    .then(serverResponse => handler.checkServerResponse(serverResponse))
                    .then(() => ctx.redirect(`#/more-details/${ctx.params.id}`))
            })

    }

    const deleteEvent = function (ctx) {

        requester.del(`events/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(() => ctx.redirect('#/home'))

    }

    const joinEvent = function (ctx) {
        const eventHeaders = {
            headers: {},
        };

        const loginUrl = storage.baseUrl + '/appdata/' + storage.appKey + '/events/' + ctx.params.id

        requester.get(`events/${ctx.params.id}`, 'appdata', 'Kinvey')
            .then(serverResponse => handler.checkServerResponse(serverResponse))
            .then(serverResponse => ctx.event = serverResponse)
            .then(() => {
                ctx.event.interestedPeople += 1;
                body = ctx.event;
                requester.put(`events/${ctx.params.id}`, 'appdata', 'Kinvey', body)
                    .then(serverResponse => handler.checkServerResponse(serverResponse))
                    .then(() => ctx.redirect(`#/more-details/${ctx.params.id}`))
            })

    }

    return {
        getEventFormTemplate,
        createEventData,
        getAllEvents,
        getCurrentEvent,
        getEditTemplate,
        postEdit,
        deleteEvent,
        joinEvent,

    }
}();